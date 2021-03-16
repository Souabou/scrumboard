import React from "react";
import Icon from "@material-ui/core/icon";
import TextareaAutosize from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';

class ScrumActionButton extends React.Component {

    state = {
        formOpen: false,
        text:""
    };

    closeForm = () => {
        this.setState({
            formOpen: false
        });
    };

    openForm = () => {
        this.setState({
            formOpen: true
        });
    };

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

        return (
            <div 
            onClick={this.openForm}
            style={{
                ...styles.openForButtonGroup,
                opacity: buttonTextOpacity, color: buttonTextColor, backgroundColor: buttonTextBackground}}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    };

    renderForm = () => {
        const { list } = this.props;

        const placeholder = list ? "Enter a list title..." : "Enter a title for this card...";

        const buttonTitle = list ? "Add List" : "Add Card";

        return (
            <div>
                <Card 
                    style= { {
                        overflow:"visible",
                        minHeight: 80,
                        minWidth: 272,
                        padding: "6px 8px 2px"
                    }}
                >
                    <TextareaAutosize 
                        placeholder={placeholder}  
                        autoFocus
                        onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        style={ {
                            resize: "none",
                            width: "100%",
                            overflow: "hidden",
                            outline: "none",
                            border: "none"
                        }}
                    />
                </Card>
            </div>
        );
    };

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}
const styles = {
    openForButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10

    }
};
export default ScrumActionButton;