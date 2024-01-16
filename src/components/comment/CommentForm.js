import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import { SEND_COMMENT } from "../../graphql/mutations";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
      setName("");
      setEmail("");
      setText("");
    } else {
      toast.warn("تمام فیلد هارا پر کنید", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    if (data) {
      toast.success("کامنت شما ارسال شد و منتظر تایید می باشد", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }, [data]);

  if (error) {
    toast.error(`خطایی رخ داده است: ${error.message}`, {
      position: "top-center",
    });
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          ارسال کامنت
        </Typography>
      </Grid>
      <CacheProvider value={cacheRtl}>
        <Grid item xs={12} m={2}>
          <TextField
            label="نام کاربری"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} m={2}>
          <TextField
            label="ایمیل"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} m={2}>
          <TextField
            label="متن کامنت"
            variant="outlined"
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
            multiline
            minRows={5}
          />
        </Grid>
      </CacheProvider>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            درحال ارسال...
          </Button>
        ) : (
          <Button
            variant="contained"
            startIcon={<SendRoundedIcon />}
            sx={{
              width: "100px",
              justifyContent: "space-between",
            }}
            onClick={sendHandler}
          >
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer rtl={true} />
    </Grid>
  );
}

export default CommentForm;
