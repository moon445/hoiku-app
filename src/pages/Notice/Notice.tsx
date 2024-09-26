// import { useNavigate } from "react-router-dom";
// import { RootState } from '../../store';
// import { useSelector } from 'react-redux';

import Layout from "../../components/Layout";
import { Paper, Typography } from "@mui/material";
import Box from '@mui/material/Box';


export default function Notice() {
  // const navigate = useNavigate();


  // const { user } = useSelector((state: RootState) => state.auth);
  // const userName = useSelector((state: RootState) => state.auth.user?.name);
  // const mail = useSelector((state: RootState) => state.auth.user?.mail);

  return (
<Layout title="お知らせ">
  <Paper>
    <div className="app-container">
      <main>
        <Box>
          <Typography variant="body1">
            2021/4/1 お知らせ
          </Typography>
          <Typography variant="body1">
            2021/4/2 お知らせ
          </Typography>
        </Box>
      </main>
    </div>
  </Paper>
</Layout>

  );
}