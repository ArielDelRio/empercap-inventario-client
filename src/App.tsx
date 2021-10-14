import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Box, Stack, Divider } from "@mui/material";
import { domain } from "./config";
import "./App.css";
import SearchBox from "./components/search-box/SearchBox";
import { Filter, Product } from "./interfaces";
import { filters } from "./constants/constants";
import FilterBox from "./components/filter-box/FilterBox";

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterActive, setFilterActive] = useState<Filter>(filters[0]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchProducts = async () => {
    if (searchValue.trim().length === 0) return;

    setLoading(true);
    try {
      const response = await fetch(
        `${domain}/productos/${filterActive.value}/${searchValue}`
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  return (
    <>
      <CssBaseline />
      <Box
        width="100vw"
        height="100vh"
        bgcolor="background-color: #8BC6EC; background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);"
      >
        <Container>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            sx={{
              paddingTop: loading || products.length ? "10vh" : "35vh",
              transition: "padding-top 1s",
            }}
          >
            <SearchBox
              searchValue={searchValue}
              changeSearchValue={(value: React.SetStateAction<string>) =>
                setSearchValue(value)
              }
              searchEvent={handleSearchProducts}
            />
            <Stack
              direction="row"
              flexWrap="wrap"
              spacing={{ xs: 1, sm: 2 }}
              mt={"2em"}
              divider={<Divider orientation="vertical" flexItem />}
            >
              {filters.map((filter) => (
                <FilterBox
                  key={filter.id}
                  id={filter.id}
                  title={filter.title}
                  value={filter.value}
                  active={filterActive.id === filter.id}
                  icon={filter.icon}
                  selectFilter={() => setFilterActive(filter)}
                />
              ))}
            </Stack>
            {loading
              ? "...loading"
              : products.map((product) => (
                  <div key={product.id}>{product.cod_producto}</div>
                ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default App;
