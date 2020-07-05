import React from 'react';
import { Button, TextInput, Modal, Icon } from 'react-materialize';
import classes from './MonitoringPage.css';

const monitoringPage = ( props ) => {
    console.log(props.url);
    const title = props.url != null ? 'Edit monitoring page' : 'Add monitoring page';

    return (
        <Modal
            actions={[
                <div>
                <Button flat modal="close" node="button" waves="green">Cancel</Button>
                <Button flat node="button" waves="green">Delete</Button>
                <Button flat node="button" waves="green" className={classes.red}>Save</Button>
                </div>
            ]}
            bottomSheet
            fixedFooter={false}
            header={title}
            id="Modal-0"
            open={false}
            options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
            }}
            trigger={<Button
                className="red"
                floating
                icon={<Icon>add</Icon>}
                small
                node="button"
                waves="light"
                />}
            >
            <form>
                <TextInput
                    id="TextInput-4"
                    label="Url"
                />
            </form>
        </Modal>
    )
};

export default monitoringPage;