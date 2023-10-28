import React from 'react'
import { Box } from '@mui/material'
import BreakdownChart from 'components/BreakdownChart'
import Header from 'components/Header'

function BreakDown() {
  return (
   <Box m="1.5rem 2.5rem">
    <Header title="BREAKDOWN" subtitle="Breakdown by Sales Categories"/>
    <Box mt="40px" height="70vh">
        <BreakdownChart />
    </Box>
   </Box>
  )
}

export default BreakDown