import React, {Component} from 'react';
import {IconButton} from "@neos-project/react-ui-components";
import {connect} from 'react-redux';
import {selectors, actions} from '@neos-project/neos-ui-redux-store';
import {$transform} from 'plow-js';
import {neos} from '@neos-project/neos-ui-decorators';
import {
	findNodeInGuestFrame,
} from '@neos-project/neos-ui-guest-frame';

@connect($transform({
	siteNodeSelector: selectors.CR.Nodes.siteNodeSelector,
	focusedNodeIdentifier: selectors.CR.Nodes.focusedNodeIdentifierSelector,
	focusedSelector: selectors.CR.Nodes.focusedSelector
}))
@neos(globalRegistry => ({
	i18nRegistry: globalRegistry.get('i18n'),
	nodeTypesRegistry: globalRegistry.get('@neos-project/neos-ui-contentrepository')
}))
@connect((state, {nodeTypesRegistry}) => {
	const canBePastedSelector = selectors.CR.Nodes.makeCanBePastedSelector(nodeTypesRegistry);

	return (state, {contextPath}) => {
		const clipboardNodesContextPaths = selectors.CR.Nodes.clipboardNodesContextPathsSelector(state);
		const canBePasted = (clipboardNodesContextPaths.every(clipboardNodeContextPath => {
			return canBePastedSelector(state, {
				subject: clipboardNodeContextPath,
				reference: contextPath
			});
		}));

		return {canBePasted};
	};
}, {
	pasteNode: actions.CR.Nodes.paste,
	focusNode: actions.CR.Nodes.focus
})
class AddButton extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {i18nRegistry, focusedSelector, pasteNode, focusNode, canBePasted} = this.props;

		const findParentWithAttribute = (element, attributeName) => {
			if (!element) {
				return null;
			}
			if (element.getAttribute(attributeName)) {
				return element;
			}
			return findParentWithAttribute(element.parentElement, attributeName);
		};

		const createScroller = (body, cssClassName) => {
			const newElement = document.createElement('div');
			newElement.className = cssClassName;
			newElement.dataset.scroller = '1';
			body.appendChild(newElement);
		}

		// const canBePasted = (node, contextPathToPaste) => {
		// 	const nodeContextPath = node.getAttribute('data-__neos-node-contextpath');
		// 	if(node.parentElement.getAttribute('data-__neos-node-contextpath') === contextPathToPaste) {
		// 		return false;
		// 	} else {
		// 		canBePasted(node.parentElement, contextPathToPaste);
		// 	}
		// 	return true;
		// }

		const handleMouseDown = () => {

			const guestFrame = document.getElementsByName('neos-content-main')[0];
			const iframeDocument = guestFrame.contentDocument || guestFrame.contentWindow.document;

			const body = iframeDocument.getElementsByTagName('body')[0];

			document.getElementById('neos-ContentTree-CutSelectedNode').click();
			const node = findNodeInGuestFrame(focusedSelector.contextPath);

			const dummyElement = node.cloneNode(true);
			dummyElement.classList.add('movablenode');

			node.parentNode.appendChild(dummyElement);

			let contextPathToPaste = false;
			let fusionPathToPaste = false;

			const pasteNodeInTarget = (contextPathToPaste, fusionPathToPaste) => {
				// if(canBePasted) {
				// 	pasteNode(contextPathToPaste, fusionPathToPaste);
				// } else {
				// 	console.log("Node can't be pasted")
				// }
				document.getElementById('neos-ContentTree-PasteClipBoardNode').click();
			}

			let scrollInterval = false;

			const handleScroll = (event) => {
				const elementUnderMouse = iframeDocument.elementFromPoint(event.clientX, event.clientY);
				const scrollerElement = findParentWithAttribute(elementUnderMouse, 'data-scroller');
				if(scrollerElement) {
					if(scrollerElement.classList.contains('scroller-top')) {
						scrollInterval = setInterval(() => {
							guestFrame.contentWindow.scrollBy({
								top: -200,
								behavior: 'smooth'
							});
						}, 200)
					}
					if(scrollerElement.classList.contains('scroller-bottom')) {
						scrollInterval = setInterval(() => {
							guestFrame.contentWindow.scrollBy({
								top: +200,
								behavior: 'smooth'
							});
						}, 200)
					}
				}
			}

			const moveHandler = (event) => {
				dummyElement.style.left = (event.clientX) + 'px';
				dummyElement.style.top = (event.clientY) + 'px';

				const elementUnderMouse = iframeDocument.elementFromPoint(event.clientX, event.clientY);
				const elementWithAttribute = findParentWithAttribute(elementUnderMouse, 'data-__neos-node-contextpath');
				if (elementWithAttribute) {
					contextPathToPaste = elementWithAttribute.getAttribute('data-__neos-node-contextpath');
					fusionPathToPaste = elementWithAttribute.getAttribute('data-__neos-fusion-path');
					focusNode(contextPathToPaste);
				}
			};

			iframeDocument.addEventListener('mousemove', moveHandler);
			createScroller(body, 'scroller-top');
			createScroller(body, 'scroller-bottom');

			body.querySelector('.scroller-top').addEventListener('mouseover', handleScroll);
			body.querySelector('.scroller-top').addEventListener('mouseout', () => { clearInterval(scrollInterval) });

			body.querySelector('.scroller-bottom').addEventListener('mouseover', handleScroll);
			body.querySelector('.scroller-bottom').addEventListener('mouseout', () => { clearInterval(scrollInterval) });

			const upHandler = () => {
				iframeDocument.removeEventListener('mousemove', moveHandler);
				dummyElement.remove();
				if(body.querySelector('.scroller-top') && body.querySelector('.scroller-bottom')) {
					body.querySelector('.scroller-top').remove();
					body.querySelector('.scroller-bottom').remove();
				}
				if(contextPathToPaste && fusionPathToPaste) {
					pasteNodeInTarget(contextPathToPaste, fusionPathToPaste);
					contextPathToPaste = false;
					fusionPathToPaste = false;
				}
			};
			iframeDocument.addEventListener('mouseup', upHandler);
		}

		return (
			<div onMouseDown={() => handleMouseDown()} >
				<IconButton
					id="neos-InlineToolbar-MoveNode"
					icon="fas fa-arrows-alt"
					onClick={() => {}}
					hoverStyle="brand"
					title={i18nRegistry.translate(unescape('NeosRulez.Neos.MoveableNodes:Main:label.moveButton'))}
				/>
			</div>
		);
	}
}

export default AddButton;
