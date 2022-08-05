import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupIcon from '@mui/icons-material/Group';
import {Box,styled} from '@mui/material'

const Notification= styled(NotificationsIcon)`
 color:#000;
 padding:4px;
 cursor:pointer;
 width:30px;

`;
const NotificationBtn= styled(Box)`
  background-color:#f5f6fa;
  border-radius: 5px;
  margin-left:30px;
`;

const GroupBtn= styled(Box)`
  background-color:#f5f6fa;
  border-radius: 5px;
  margin-left:15px;
`;

const GroupNotification = styled(GroupIcon)`
color:#000;
 padding:4px;
 cursor:pointer;
 width:30px;
`;

const Component = styled(Box)`
display:flex;
`;

function IconButton() {
  return (
    <Component>
      <NotificationBtn>
        < Notification variant="contained"/>
      </NotificationBtn>   


      <GroupBtn>
      <GroupNotification variant="contained"/>
      </GroupBtn> 
        
    </Component>
  )
}

export default IconButton