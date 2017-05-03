import React from 'react';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Icon = styled.div`
    fontSize: 150%;
    display: inline-block;
    width: 20px;
    text-align: center;
    vertical-align: middle;
    height: 20px;
    line-height: 20px;
`;

export class Note extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        icon: PropTypes.element,
    }

    render() {
        if (!this.props.text) {
            return null;
        }

        const tooltip = <Tooltip id={this.props.text}>{this.props.text}</Tooltip>;

        return (
            <OverlayTrigger placement="top" overlay={tooltip}>
                <span>{this.props.icon || '*'}</span>
            </OverlayTrigger>
        );
    }
}

export function recycles(text) {
    return <Note
        text={text || 'Card is likely to recycle from the discard'}
        icon={<span style={{fontSize: '200%'}}>{'\u2672'}</span>}
    />;
}
