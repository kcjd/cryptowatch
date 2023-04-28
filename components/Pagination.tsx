import { ChevronBack, ChevronForward } from "@styled-icons/ionicons-solid";
import styled from "styled-components";
import { Button } from "components/Button";

type Props = {
  current: number;
  max: number;
  onChange: (page: number) => void;
};

const Pagination = ({ current, max, onChange }: Props) => {
  return (
    <StyledPagination aria-label="Pagination">
      <Button
        onClick={() => onChange(Math.max(current - 1, 1))}
        disabled={current === 1}
        aria-label="Page précédente"
      >
        <ChevronBack size={16} />
      </Button>
      {[...Array(max)].map((_, i) => {
        const page = i + 1;
        const isActive = page === current;
        return (
          <Button
            key={page}
            isActive={isActive}
            onClick={() => onChange(page)}
            aria-current={isActive ? "page" : "false"}
            aria-label={`Page ${page}`}
          >
            {page}
          </Button>
        );
      })}
      <Button
        onClick={() => onChange(Math.min(current + 1, max))}
        disabled={current === max}
        aria-label="Page suivante"
      >
        <ChevronForward size={16} />
      </Button>
    </StyledPagination>
  );
};

const StyledPagination = styled.nav`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.sizes[200]};
  margin-top: ${(props) => props.theme.sizes[600]};

  & ${Button} {
    justify-content: center;
    width: ${(props) => props.theme.sizes[650]};
  }
`;

export default Pagination;
