import { SearchBarWrapper, StyledSearchIcon, StyledInput, Container } from "./style/style";

export const Search = ({value, onChange}) => (

    <Container>
        <SearchBarWrapper>
            <StyledSearchIcon />
            <StyledInput
                type="text"
                placeholder="Search by name..."
                value={value}
                onChange={onChange}
            />
        </SearchBarWrapper>
    </Container>
)