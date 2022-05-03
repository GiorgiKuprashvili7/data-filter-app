import { Container, Grid } from '@mui/material'
import { useState } from 'react'
import FilterBar from './components/FilterBar'
import UserItem from './components/UserItem'
import data from './MOCK_DATA.json'

function App() {
  const [allData, setAllData] = useState(data)

  const handleNameFilter = (name: string) => {
    // eslint-disable-next-line array-callback-return
    const filteredData = data.filter((item: any) => {
      const fullName = `${item?.first_name} ${item?.last_name}`

      if (fullName.toLowerCase().includes(name.toLowerCase())) {
        return item
      }
    })
    setAllData(filteredData)
  }
  const handleEmailFilter = (email: string) => {
    // eslint-disable-next-line array-callback-return
    const filteredData = data.filter((item: any) => {
      if (item?.email.toLowerCase().includes(email.toLowerCase())) {
        return item
      }
    })
    setAllData(filteredData)
  }

  const handleGenderFilter = (gender: string) => {
    // eslint-disable-next-line array-callback-return
    const filteredData = data.filter((item: any) => {
      if (item.gender === gender) {
        return item
      }
    })
    setAllData(filteredData)
  }

  const generateGenderDataForDropdown = () => {
    return [...new Set(data.map((item: any) => item.gender))]
  }

  return (
    <Container>
      <FilterBar
        genders={generateGenderDataForDropdown()}
        onNameFilter={handleNameFilter}
        onEmailFilter={handleEmailFilter}
        onGenderFilter={handleGenderFilter}
      />

      <Grid container>
        {allData.map((item: any) => {
          return <UserItem item={item} key={item.id} />
        })}
      </Grid>
    </Container>
  )
}

export default App
