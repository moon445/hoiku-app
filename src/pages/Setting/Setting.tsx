import { useState, useEffect } from "react";
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import { Divider, Paper, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { SlArrowRight } from "react-icons/sl";
import Box from '@mui/material/Box';
import { userApi } from '../../utils/api'


export default function Setting() {

  const navigate = useNavigate();

  // const { user } = useSelector((state: RootState) => state.auth);
  // const userName = useSelector((state: RootState) => state.auth.user?.name);
  // const mail = useSelector((state: RootState) => state.auth.user?.mail);
  const userId = useSelector((state: RootState) => state.auth.user!.id);

  const [resuser, setResuser] = useState<any>(null);
  const [reschild, setReschild] = useState<any>(null);


  // user情報
  const getusers = async () => {
    // const res = await userApi.users.login('abc@example.com', 'hdiaskjpsdfaj1');
    const resuser = await userApi.users.getUser(userId);
    setResuser(resuser);

    const reschild = await userApi.child.getUser1(userId);
    setReschild(reschild);

  };

  useEffect(() => {
    getusers();
  }, []);


  return (
    <Layout title="設定">
      <Typography variant="h6" sx={{ mb: 2, textAlign: 'left' }}>
        ユーザー情報
      </Typography>
      <Paper>
        <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', mb: 1 } } onClick={() => navigate('/Setting/UpMail')}>
              <Typography variant="body1" sx={{ mr: 2 }}>
                メールアドレス: {resuser?.mail || ''}
              </Typography>
              <IconButton color="inherit" sx={{ p: 1, mr: -1 }}>
                <Badge color="secondary">
                  <SlArrowRight />
                </Badge>
              </IconButton>
            </Box>
            <><Divider sx={{ width: '100%', mb: 1 }} /></>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', mb: 1 } } onClick={() => navigate('/Setting/UpPass')}>
              <Typography variant="body1" sx={{ mr: 2 }}>
                パスワード: {resuser?.password || ''}
              </Typography>
              <IconButton color="inherit" sx={{ p: 1, mr: -1 }}>
                <Badge color="secondary">
                  <SlArrowRight />
                </Badge>
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

          </Box>
        </Box>
      </Paper>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h6" sx={{ mb: 2, textAlign: 'left' }}>
          園児情報
        </Typography>
      </Box>
      <Paper>
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

            {reschild && reschild.child_name && (
              <Typography variant="body1" sx={{ mb: 2 }}>
                なまえ: {reschild.child_name}
              </Typography>

            )}
            <><Divider sx={{ width: '100%', mb: 1 }} /></>
            {reschild && reschild.child_name && (
              <Typography variant="body1" sx={{ mb: 1 }}>
                生年月日: {reschild.birthday}
              </Typography>

            )}
            <><Divider sx={{ width: '100%', mb: 1 }} /></>
            {reschild && reschild.child_name && (
              <Typography variant="body1" sx={{ mb: 1 }}>
                性別: {reschild.genderName}
              </Typography>

            )}
            <><Divider sx={{ width: '100%', mb: 0 }} /></>
            <Typography variant="body1">
              記録: {'うさぎ組'}
            </Typography>
            <Typography variant="body1">
              記録: {'りす組'}
            </Typography>
            <Typography variant="body1">
              記録: {'ぱんだ組'}
            </Typography>
            <Typography variant="body1">
              記録: {'ぺんぎん組'}
            </Typography>
          </Box>
        </Box>
      </Paper>

    </Layout>

  );
}