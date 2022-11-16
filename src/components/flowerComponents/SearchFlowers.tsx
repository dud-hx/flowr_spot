import * as React from "react";
import {
    FormControl,
    IconButton,
    InputAdornment,
    OutlinedInput,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import StateStore from "../../state/stateStore";
import { inject, observer } from "mobx-react";
interface ISearchProps {
    StateStore?: StateStore;
}
const SearchFlowers: React.FC<ISearchProps> = props => {
    const [value, setValue] = React.useState<any | null>(null);
    const handleOnSearch = () => {
        if (value) {
            props.StateStore?.searchFlower(value)
        }
    }
        return (
                 <FormControl
                    sx={{ m: 1, width: "76ch" }}
                    variant="outlined"
                    style={{ backgroundColor: "white" }}
                >
                    <OutlinedInput
                        id="search-bar"
                        className="search__bar"
                        onChange={(e) => {
                            setValue(e.target.value)
                        }}
                        value={value}
                        margin="dense"
                        color="error"
                        placeholder="Looking for something specific"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    color="error"
                                    aria-label="toggle password visibility"
                                    onClick={handleOnSearch}
                                    edge="end"
                                >
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
         )
    }

    export default inject("StateStore")(observer(SearchFlowers));
