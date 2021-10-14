import { Button, Icon } from "@mui/material";
import React, { MouseEventHandler } from "react";
import { Filter } from "../../interfaces";

interface FilterBoxProps extends Filter {
  active: boolean;
  selectFilter: MouseEventHandler;
}

const FilterBox: React.FC<FilterBoxProps> = ({
  id,
  title,
  value,
  active,
  icon,
  selectFilter,
}) => {
  return (
    <Button
      variant="outlined"
      size="large"
      startIcon={<Icon>{icon || "filter_alt"}</Icon>}
      sx={{
        color: active ? "#fff" : "#000",
        borderColor: active ? "#fff" : "#000",
        bgcolor: active ? "#001e3c" : "default",
        borderRadius: "1em",
        "&:hover": {
          bgcolor: active ? "#001e3c" : "#41648a",
          color: "#fff",
        },
      }}
      onClick={selectFilter}
    >
      {title}
    </Button>
  );
};

export default FilterBox;
