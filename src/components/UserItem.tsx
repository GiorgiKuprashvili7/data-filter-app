import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const UserItem = ({ item }: any) => {
  return (
    <Grid item xs={4}>
      <Paper sx={{ margin: 1, overflow: 'hidden' }}>
        <img src={item?.image} alt="" style={{ width: '100%' }} />
        <Box p={1}>
          <Typography variant="h6" component="h3">
            {item?.first_name} {item?.last_name}
          </Typography>
          <Typography variant="body2">{item?.email}</Typography>
          <Typography variant="body2">{item?.gender}</Typography>
        </Box>
      </Paper>
    </Grid>
  )
}

export default UserItem
