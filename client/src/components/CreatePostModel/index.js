import { Button, Modal, TextareaAutosize, TextField } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalState$ } from "../../redux/selectors";
import useStyles from "./styles";
import FileBase64 from "react-file-base64";
import { createPost, hideModal } from "../../redux/actions";

function CreatePossModel(props) {
  const [data, setData] = React.useState({
    title: "",
    content: "",
    attachment: "",
  });
  const { isShow } = useSelector(modalState$);
  const classes = useStyles();
  const dispatch = useDispatch();

  const onClose = React.useCallback(() => {
    dispatch(hideModal());
    setData({
      title: "",
      content: "",
      attachment: "",
    });
  }, [dispatch]);

  const onSubmit = React.useCallback(() => {
    console.log({ data });
    dispatch(createPost.createPostRequest(data));
    onClose();
  }, [data, dispatch, onClose]);

  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        <div className={classes.paper} id="simple-modal-title">
          <h2>Create New Post</h2>
          <form noValidate autoCapitalize="off" className={classes.form}>
            <TextField
              className={classes.title}
              required
              label="Title"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />

            <TextareaAutosize
              className={classes.textarea}
              rowsMax={15}
              rowsMin={10}
              placeholder="Content..."
              value={data.content}
              onChange={(e) => setData({ ...data, content: e.target.value })}
            />

            <FileBase64
              accept="image/*"
              multiple={false}
              type="file"
              value={data.attachment}
              onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
            />
            <div className={classes.footer}>
              <Button
                variant="contained"
                color="primary"
                component="span"
                fullWidth
                onClick={onSubmit}
              >
                Create
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default CreatePossModel;
