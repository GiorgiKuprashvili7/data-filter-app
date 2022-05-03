import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

const FilterBar = ({
  genders,
  onNameFilter,
  onEmailFilter,
  onGenderFilter,
}: any) => {
  const [name, setname] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setgender] = useState('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setname(e.target.value)
    onNameFilter(e.target.value)
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    onEmailFilter(e.target.value)
  }

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setgender(e.target.value)
    onGenderFilter(e.target.value)
  }

  return (
    <Box sx={{ width: 300, p: 2, pl: 1 }}>
      <TextField
        fullWidth
        label="Name"
        sx={{ mb: 2 }}
        value={name}
        onChange={handleNameChange}
      />

      <TextField
        fullWidth
        label="Email"
        sx={{ mb: 2 }}
        value={email}
        onChange={handleEmailChange}
      />

      <TextField
        fullWidth
        label="Gender"
        select
        value={gender}
        onChange={handleGenderChange}
      >
        {genders.map((gender: string) => {
          return (
            <MenuItem key={gender} value={gender}>
              {gender}
            </MenuItem>
          )
        })}
      </TextField>
    </Box>
  )
}

export default FilterBar
