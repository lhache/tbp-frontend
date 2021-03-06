import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import Select from 'react-select'
import _get from 'lodash/get'
import _isEmpty from 'lodash/isEmpty'
import { colors } from '../design-system/theme'
import { defaultSearchParams } from './search'
import Skeleton from '../design-system/Skeletons/skeleton'
import { Box } from '@rebass/grid'

const styles = {
  control: (base) => ({
    ...base,
    borderRadius: '8px',
    minHeight: '30px',
    borderColor: colors.sortOfPinkLight,
  }),
  container: (base) => ({
    ...base,
    borderRadius: '8px',
    background: colors.white,
  }),
  input: (base) => ({
    ...base,
    width: '100%',
    borderRadius: '0',
  }),
  menu: (base) => ({
    ...base,
    margin: '0',
    borderRadius: '0 0 4px 4px',
  }),
  option: (base, state) => ({
    ...base,
    fontSize: '10px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    wordBreak: 'break-all',
    backgroundColor: state.isSelected ? colors.greenBlue : colors.white,
  }),
  singleValue: (base, state) => ({
    ...base,
    fontSize: '12px',
    textTransform: 'uppercase',
    color: '#848484',
    fontWeight: 'bold',
  }),
}

const defaultCategory = {
  id: '*',
  name: 'Alle Kategorien',
}

const categories = [
  {
    id: '*',
    name: 'Alle Kategorien',
  },
  {
    id: '-9109897367476786307',
    name: 'Familienspiele',
  },
  {
    id: '9131738488879247561',
    name: 'Bau und Konstruktionsspielzeug',
  },
  {
    id: '8659051837278983098',
    name: 'Holzpuzzles',
  },
  {
    id: '-3519349273568919066',
    name: 'LEGO friends',
  },
  {
    id: '1372286699979324054',
    name: 'Lerncomputer und Zubehör',
  },
  {
    id: '-6286302371660159254',
    name: 'Basteln und Malen',
  },
  {
    id: '-6955237598935953877',
    name: 'Kinderspiele',
  },
  {
    id: '-7826175491335263611',
    name: 'Stricken',
  },
  {
    id: '-8805887483976030775',
    name: 'Buntstifte',
  },
  {
    id: '2967678565405430742',
    name: 'Adventskalender',
  },
  {
    id: '-7030023372869128068',
    name: 'Spiele',
  },
]

function Categories({ search, locationState }) {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory)

  useEffect(() => {
    if (!!search) {
      setSelectedCategory(_get(locationState, 'search.category'))
    }
  }, [locationState])

  const updateCategories = (selectedCategory) => {
    setSelectedCategory(selectedCategory)
    const newSearch = Object.assign({}, defaultSearchParams, search, {
      category: selectedCategory,
      id: undefined,
    })
    const state = Object.assign({}, locationState, {
      search: newSearch,
      selectedItem: undefined,
    })
    navigate('/app/results', { state })
  }

  return (
    <Box
      width={1}
      style={{
        minHeight: '40px',
      }}
    >
      {typeof window !== 'undefined' && (
        <Select
          isSearchable={false}
          value={selectedCategory}
          defaultValue={defaultCategory}
          options={categories}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.name}
          onChange={updateCategories}
          styles={styles}
        />
      )}
    </Box>
  )
}

export default Categories
