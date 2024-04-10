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
		this.state = {
			altKey: false
		};
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	handleKeyDown = (event) => {
		if (event.altKey) {
			this.setState({altKey: !this.state.altKey})
		}
	};

	componentDidMount() {
		const guestFrame = document.getElementsByName('neos-content-main')[0];
		guestFrame.contentWindow.addEventListener('keydown', this.handleKeyDown);
		guestFrame.contentWindow.addEventListener('keyup', () => { this.setState({altKey: false})});
	}

	render() {

		const {i18nRegistry, focusedSelector, pasteNode, focusNode, canBePasted} = this.props;
		const {altKey} = this.state;

		const guestFrame = document.getElementsByName('neos-content-main')[0];
		const iframeDocument = guestFrame.contentDocument || guestFrame.contentWindow.document;
		const body = iframeDocument.getElementsByTagName('body')[0];

		const arrowElement = document.createElement('div');
		arrowElement.id = 'pasteArrow';
		arrowElement.classList.add('paste-arrow')
		arrowElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 868 334.517"><path d="M840.344 129.526l-704.456.166 73.5-68.086a26.751 26.751 0 000-37.857l-16.1-15.962a27.117 27.117 0 00-38.024-.02L7.844 148.845a26.694 26.694 0 000 37.8l146.412 140.1a27.142 27.142 0 0038.024 0l16.1-15.962a26.278 26.278 0 007.848-18.832 25.493 25.493 0 00-7.848-18.479l-73.664-67.67h705.996c14.828 0 27.288-12.661 27.288-27.344v-22.575c0-14.682-12.828-26.357-27.656-26.357z"></path></svg>';
		body.appendChild(arrowElement);


		let contextPathToPaste = false;
		let fusionPathToPaste = false;

		let hoverPosition = false;

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

		const handleMouseDown = () => {

			if(altKey) {
				document.getElementById('neos-ContentTree-CopySelectedNode').click();
			} else {
				document.getElementById('neos-ContentTree-CutSelectedNode').click();
			}

			const node = findNodeInGuestFrame(focusedSelector.contextPath);

			const dummyElement = node.cloneNode(true);
			dummyElement.classList.add('movablenode');

			node.parentNode.appendChild(dummyElement);

			const pasteNodeInTarget = (positionToPaste) => {
				const paste = document.getElementById('neos-ContentTree-PasteClipBoardNode');

				if(paste && !paste.hasAttribute('disabled')) {
					paste.click();

					const into = document.getElementById('into');
					if(into && !into.hasAttribute('disabled')) {
						document.getElementById('into').click();
					} else {
						if(positionToPaste === 'top' && document.getElementById('before')) {
							document.getElementById('before').click();
						}
						if(positionToPaste === 'bottom' && document.getElementById('after')) {
							document.getElementById('after').click();
						}
					}

					document.getElementById('neos-InsertModeModal-apply').click();
				}

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

					const rect = elementWithAttribute.getBoundingClientRect();
					const mouseY = event.clientY - rect.top;
					const divHeight = rect.bottom - rect.top;

					const ratio = mouseY / divHeight;

					arrowElement.style.left = `${rect.left}px`;

					if (ratio < 0.5) {
						hoverPosition = 'top';
						arrowElement.style.top = `${rect.top}px`;
						arrowElement.style.marginTop = `-35px`;
					} else {
						hoverPosition = 'bottom';
						arrowElement.style.top = `${rect.bottom}px`;
						arrowElement.style.marginTop = `8px`;
					}

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
					if(focusedSelector.contextPath !== contextPathToPaste) {
						pasteNodeInTarget(hoverPosition);
					}
					contextPathToPaste = false;
					fusionPathToPaste = false;
					hoverPosition = false;
					removeHovers();
					this.setState({altKey: false})
				}
			};
			iframeDocument.addEventListener('mouseup', upHandler);
		}

		const removeHovers = () => {
			const hovers = iframeDocument.querySelectorAll('.paste-arrow');
			if(hovers && hovers.length > 0) {
				hovers.forEach(hover => {
					hover.remove();
				})
			}
		}

		return (
			<div onMouseDown={() => handleMouseDown()} >
				<IconButton
					id="neos-InlineToolbar-MoveNode"
					icon={altKey ? 'far fa-clone' : 'fas fa-arrows-alt'}
					onClick={() => {}}
					hoverStyle="brand"
					title={i18nRegistry.translate(unescape('NeosRulez.Neos.MoveableNodes:Main:label.moveButton'))}
				/>
			</div>
		);
	}
}

export default AddButton;
