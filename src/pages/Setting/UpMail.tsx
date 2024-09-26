import { useState, useEffect } from "react";
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import { Button, Paper, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { userApi } from '../../utils/api'

export default function UpMail() {

  const navigate = useNavigate();

  const userId = useSelector((state: RootState) => state.auth.user!.id);
  const [resuser, setResuser] = useState<any>(null);
  const [mail, setMail] = useState(resuser?.mail || '');

  // user情報
  const getusers = async () => {
    const resuser = await userApi.users.getUser(userId);
    setResuser(resuser);
  };

  useEffect(() => {
    getusers();
  }, []);

  const handleMailUpdate = async () => {
    // console.log(resuser);
    const updatedResuser = { ...resuser, mail };
    // console.log(updatedResuser);
    const upuser = await userApi.users.replaceUser(userId,updatedResuser);
    // メールアドレスの更新処理を記述する
    console.log('メールアドレスを更新しました:', upuser.mail);
  };

  
  return (
    <Layout title="設定">
      <Typography variant="h6" sx={{ mb: 2, textAlign: 'left' }}>
        ユーザー情報更新
      </Typography>
      <Paper>
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="body1" sx={{ mr: 2 }}>
              メールアドレス:
            </Typography>
            <TextField
              variant="outlined"
              label={resuser?.mail || ''}
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </Box>
        </Box>

      </Paper>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleMailUpdate} sx={{ mr: 2 }}>
          更新
        </Button>
        <Button variant="outlined" color="primary" onClick={() => navigate('/Setting')}>
          キャンセル
        </Button>
      </Box>

    </Layout>

  );
}