import { Star } from "@mui/icons-material";
import {
  Grid,
  IconButton,
} from "@mui/material";
import { inject, observer } from "mobx-react";
import StateStore from "../../state/stateStore";
import { flowers } from "../../models/flowerModel";
interface IPropsFlowerList {
  StateStore?: StateStore;
}
const FlowerList: React.FC<IPropsFlowerList | any> = (props) => {
  const { StateStore } = props;

  const arrayFlowers = StateStore?.values?.flowers
    ? StateStore?.values?.flowers
    : {};

  return (
    <Grid container spacing={3} sx={{ marginTop: "20px" }}>
      {StateStore?.values?.flowers ? (
        arrayFlowers.flowers.map((item: flowers | any, index: any) => (
          <Grid className="page__content"  key={`${index}${item.name}`} item md={3} sm={4} xs={12} >


            <div className="card" style={{ backgroundImage: `url(${item.profile_picture})` }}>
             {StateStore?.values.isLogged ? <IconButton className="icon">
                <Star sx={{color:"#D4D8D9"}} />
              </IconButton>: null
}
              <div className="content">
                <h2 className="title">{item.name}</h2>
                <p className="copy">{item.latin_name}</p>
                <button className="btn">{item.sightings} sightings</button>
              </div>
            </div>
          </Grid>
        ))
      ) : (
        <></>
      )}
    </Grid>
  );
};

export default inject("StateStore")(observer(FlowerList));
