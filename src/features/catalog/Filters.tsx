import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RadioButtonGroup from "../../app/components/RadioButtonGroup";
import { setProductParams } from "./catalogSlice";
import { useAppSelector, useAppDispatch } from "../../app/store/configureStore";
import CheckBoxButtons from "../../app/components/CheckBoxButtons";

const sortOptions = [
  { value: "name", label: "حروف الفبا" },
  { value: "priceDesc", label: "قیمت - زیاد به کم" },
  { value: "price", label: "قیمت - کم به زیاد" },
];

export default function FilterAccordion() {
  const { brands, types, productParams } = useAppSelector(
    (state) => state.catalog
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>ترتیب نمایش</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioButtonGroup
            selectedValue={productParams.orderBy}
            option={sortOptions}
            onChange={(e) =>
              dispatch(setProductParams({ orderBy: e.target.value }))
            }
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="body1">انتخاب برند</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CheckBoxButtons
            items={brands}
            checked={productParams.brands}
            onChange={(items: string[]) =>
              dispatch(setProductParams({ brands: items }))
            }
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="body1">انتخاب نوع کالا</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CheckBoxButtons
            items={types}
            checked={productParams.types}
            onChange={(items: string[]) =>
              dispatch(setProductParams({ types: items }))
            }
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
