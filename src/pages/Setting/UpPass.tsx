import { useState, useEffect } from "react";
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import { Button, Paper, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { userApi } from '../../utils/api'

export default function UpPass() {

  const navigate = useNavigate();

  const userId = useSelector((state: RootState) => state.auth.user!.id);
  const [resuser, setResuser] = useState<any>(null);
  const [pass, setMail] = useState(resuser?.password || '');

  // user情報
  const getusers = async () => {
    const resuser = await userApi.users.getUser(userId);
    setResuser(resuser);
  };

  useEffect(() => {
    getusers();
  }, []);

  const handlePassUpdate = async () => {
    console.log(resuser);
    const updatedResuser = { ...resuser, password: pass };
    console.log(updatedResuser);
    const upuser = await userApi.users.replaceUser(userId,updatedResuser);
    console.log('パスワードを更新しました:', upuser.password);
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
              パスワード:
            </Typography>
            <TextField
              variant="outlined"
              label={resuser?.password || ''}
              value={pass}
              onChange={(e) => setMail(e.target.value)}
            />
          </Box>
        </Box>

      </Paper>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handlePassUpdate} sx={{ mr: 2 }}>
          更新
        </Button>
        <Button variant="outlined" color="primary" onClick={() => navigate('/Setting')}>
          キャンセル
        </Button>
      </Box>

    </Layout>

  );
}