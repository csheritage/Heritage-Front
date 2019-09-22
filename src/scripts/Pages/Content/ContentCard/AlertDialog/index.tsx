import React from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@material-ui/core";
import { DialogContentText, DialogTitle } from "@material-ui/core";

import { AlertDialogProps } from "./Dialog.type";

const AlertDialog: React.FC<AlertDialogProps> = ({ open, handleClose, handleFunc }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"정말 지우시겠습니까?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            당신이 쓴 글이 맞고 지워도 책임질 수 있다면 지워도 상관없습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFunc} color="primary" autoFocus>
            확인
          </Button>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
