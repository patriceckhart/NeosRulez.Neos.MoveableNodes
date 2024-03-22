import React, {PureComponent} from 'react';
import manifest from '@neos-project/neos-ui-extensibility';
import MoveButton from "./components/MoveButton";

manifest('NeosRulez.Neos.MoveableNodes', {}, (globalRegistry, {frontendConfiguration}) => {
	const guestFrameRegistry = globalRegistry.get('@neos-project/neos-ui-guest-frame');
	guestFrameRegistry.set('NodeToolbar/Buttons/MoveButton', AddMoveButton());
});

const AddMoveButton = () => {
	return class addMoveButton extends PureComponent {

		constructor(props) {
			super(props);
		}

		render() {
			return <div style={{float: 'left'}}><MoveButton /></div>
		}
	}
};
