import *  as React from 'react';
import {  Button, Paragraph, Dialog, Portal } from 'react-native-paper';

type ConfirmationDialogProps = {
  success: boolean,
  message: string | undefined,
  handleDismiss: Function,
} & Omit<React.ComponentProps<typeof Dialog>, 'visible' >;

const ConfirmationDialog: React.FunctionComponent<ConfirmationDialogProps> = ({
  success,
  message,
  handleDismiss
}) => {
  return (
    <Portal>
      <Dialog visible={success} onDismiss={() => handleDismiss()}>
        <Dialog.Content>
          <Paragraph>{message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => handleDismiss()}>close</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
};

export default ConfirmationDialog;
