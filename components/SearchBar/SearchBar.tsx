import { CoinBaseData, SearchResponse } from '../../types'
import { Dispatch, SetStateAction, useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import styled from 'styled-components'
import { Combobox } from '@headlessui/react'
import { Search } from '@styled-icons/ionicons-solid'
import CoinName from '../CoinName'
import CoinSymbol from '../CoinSymbol'
import Loader from '../Loader'
import MenuItem from '../MenuItem'
import Modal from '../Modal'
import useDebounce from '../../hooks/useDebounce'
import { API_ENDPOINTS } from '../../helpers/constants'

type Props = {
  isOpen: boolean
  toggle: Dispatch<SetStateAction<boolean>>
}

const SearchBar = ({ isOpen, toggle }: Props) => {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query)
  const { data: results, isValidating } = useSWR<SearchResponse>(
    debouncedQuery ? [API_ENDPOINTS.search, { query: debouncedQuery }] : null
  )
  const [selected, setSelected] = useState<CoinBaseData | null>(null)

  const handleChange = (coin: CoinBaseData | null) => {
    if (!coin) return

    setSelected(coin)
    router.push(`/coins/${coin.id}`)
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle} onExit={() => setQuery('')}>
      <Combobox value={selected} onChange={handleChange}>
        <InputWrapper>
          <SearchIcon size={16} />
          <Combobox.Input
            as={Input}
            placeholder="Que recherchez-vous ?"
            autoComplete="off"
            displayValue={(coin: CoinBaseData | null) => coin?.name || ''}
            onChange={(e) => setQuery(e.target.value)}
          />
          {isValidating && <SearchLoader />}
        </InputWrapper>
        {results && results.coins.length > 0 && (
          <Combobox.Options as={ResultList} static>
            {results.coins.slice(0, 5).map((coin) => (
              <Combobox.Option key={coin.id} value={coin}>
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
  height: ${({ theme }) => theme.sizes[700]};
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
  margin-block: auto;
`

const ResultList = styled.ul`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-block: ${({ theme }) => theme.sizes[250]};
`

export default SearchBar
