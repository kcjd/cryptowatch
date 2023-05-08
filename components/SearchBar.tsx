import { useRouter } from "next/router";
import { Combobox } from "@headlessui/react";
import { Search } from "@styled-icons/ionicons-solid";
import { useState } from "react";
import styled from "styled-components";
import Field from "components/Field";
import Loader from "components/Loader";
import Menu from "components/Menu";
import Modal from "components/Modal";
import useSearch from "hooks/useSearch";
import { CoinBaseData } from "lib/types";

type Props = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

const SearchBar = ({ isOpen, setOpen }: Props) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const { data: results, isValidating } = useSearch(query);

  const handleChange = (coin?: CoinBaseData) => {
    if (!coin) return;
    router.push(`/coins/${coin.id}`);
    setOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setOpen={setOpen} onExit={() => setQuery("")}>
      <Combobox value={null} onChange={handleChange}>
        <Field>
          <Search size={16} />
          <Combobox.Input
            placeholder="Search token name"
            autoComplete="off"
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search"
          />
          {isValidating && <Loader />}
        </Field>
        {results && results.coins.length > 0 && (
          <Combobox.Options as={StyledMenu} static>
            {results.coins.slice(0, 5).map((coin) => (
              <Combobox.Option key={coin.id} value={coin}>
                {coin.name}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </Combobox>
    </Modal>
  );
};

const StyledMenu = styled(Menu)`
  border-top: 1px solid ${(props) => props.theme.colors.neutral[700]};
`;

export default SearchBar;
