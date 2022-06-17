import { useRouter } from 'next/router'

import { Combobox } from '@headlessui/react'
import { Search } from '@styled-icons/ionicons-solid'
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import useSWR from 'swr'

import CoinName from 'components/CoinName'
import CoinSymbol from 'components/CoinSymbol'
import Loader from 'components/Loader'
import MenuItem from 'components/MenuItem'
import Modal from 'components/Modal'

import useDebounce from 'hooks/useDebounce'

import { CoinBaseData, SearchResponse } from 'lib/types'

type Props = {
  isOpen: boolean
  toggle: Dispatch<SetStateAction<boolean>>
}

const SearchBar = ({ isOpen, toggle }: Props) => {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query)

  const { data: results, isValidating } = useSWR<SearchResponse>(
    debouncedQuery ? `/search?query=${debouncedQuery}` : null
  )

  const handleChange = (coin?: CoinBaseData) => {
    if (!coin) return
    router.push(`/coins/${coin.id}`)
    toggle(false)
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle} onExit={() => setQuery('')}>
      <Combobox value={null} onChange={handleChange}>
        <InputWrapper>
          <SearchIcon size={16} />
          <Combobox.Input
            as={Input}
            placeholder="Que recherchez-vous ?"
            autoComplete="off"
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Recherche"
          />
          {isValidating && <SearchLoader />}
        </InputWrapper>
        {results && results.coins.length > 0 && (
          <Combobox.Options as={ResultList} static>
            {results.coins.slice(0, 5).map((coin) => (
              <Combobox.Option key={coin.id} as={Fragment} value={coin}>
                {({ active }) => (
                  <MenuItem active={active}>
                    <CoinName>{coin.name}</CoinName>
                    <CoinSymbol>{coin.symbol}</CoinSymbol>
                  </MenuItem>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </Combobox>
    </Modal>
  )
}

const InputWrapper = styled.div`
  position: relative;
`

const SearchIcon = styled(Search)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ theme }) => theme.sizes[400]};
  margin-block: auto;
  pointer-events: none;
`

const Input = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.sizes[750]};
  padding-left: ${({ theme }) => theme.sizes[650]};
  padding-right: ${({ theme }) => theme.sizes[400]};
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }
`

const SearchLoader = styled(Loader)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${({ theme }) => theme.sizes[400]};
`

const ResultList = styled.ul`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-block: ${({ theme }) => theme.sizes[250]};
`

export default SearchBar
