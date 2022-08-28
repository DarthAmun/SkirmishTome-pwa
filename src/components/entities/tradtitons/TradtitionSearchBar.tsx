import React, { useState } from "react";
import { useHistory } from "react-router";
import Filter from "../../../data/Filter";
import ReactDOM from "react-dom";
import {
  createNewWithId,
  exportFilteredFromTable,
} from "../../../services/DatabaseService";

import {
  faSearch,
  faRedoAlt,
  faPlusCircle,
  faFileExport,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StringSearchField from "../../form_elements/StringSearchField";
import IconButton from "../../form_elements/IconButton";
import {
  FixedBar,
  SearchBar,
  CreateButton,
  ExportButton,
  LeftTooltip,
} from "../../SearchbarStyle";
import Tradition from "../../../data/Tradition";

const TraditionSearchBar = () => {
  let history = useHistory();
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<Filter[]>([]);

  const [name, setName] = useState<string>("");

  const [sort, setSort] = useState<{
    name: string;
    label: string;
    sort: number;
  }>({
    name: "",
    label: "",
    sort: 0,
  });

  const search = () => {
    let newFilters: Filter[] = [];
    if (name !== "") {
      newFilters = [...newFilters, new Filter("name", name)];
    }

    newFilters = newFilters.map((filter: Filter) => {
      if (sort.name === filter.fieldName) {
        return { ...filter, sort: sort.sort };
      }
      return filter;
    });

    setFilters(newFilters);
    setOpen(false);
    history.push(`/tradition-overview?filter=${JSON.stringify(newFilters)}`);
  };

  const reset = () => {
    ReactDOM.unstable_batchedUpdates(() => {
      setName("");
      setOpen(false);
      setSort({
        name: "",
        label: "",
        sort: 0,
      });
    });
    history.push(`/tradition-overview`);
  };

  const createNewTradition = () => {
    let newTradition = new Tradition();
    delete newTradition.id;
    createNewWithId("traditions", newTradition, (id) => {
      history.push(`/tradition-detail/id/${id}`);
    });
  };

  const exportFiltered = () => {
    exportFilteredFromTable("traditions", filters, "SkirmishTome_filtered_traditions.json");
  };

  return (
    <>
      <FixedBar open={open}>
        <StringSearchField
          value={name}
          sort={sort}
          field={"name"}
          label="Name"
          onChange={(name: string, sort: { name: string; label: string; sort: number }) => {
            setName(name);
            setSort(sort);
          }}
        />

        <IconButton onClick={() => search()} icon={faSearch} />
        <IconButton onClick={() => reset()} icon={faRedoAlt} />
        <SearchBar onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={faSearch} rotation={90} />
        </SearchBar>
      </FixedBar>
      <CreateButton onClick={() => createNewTradition()}>
        <FontAwesomeIcon icon={faPlusCircle} />
        <LeftTooltip>Add new</LeftTooltip>
      </CreateButton>
      <ExportButton onClick={() => exportFiltered()}>
        <FontAwesomeIcon icon={faFileExport} />
        <LeftTooltip>Export filtered</LeftTooltip>
      </ExportButton>
    </>
  );
};

export default TraditionSearchBar;
