import MutualFundBasics from "../sections/MutualFundBasics";
import EquityVsOther from "../sections/EquityVsOther";
import AssetAllocation from "../sections/AssetAllocation";
import InflationImpact from "../sections/InflationImpact";

function MutualFunds(){

  return(

    <div>

      <MutualFundBasics/>

      <EquityVsOther/>

      <AssetAllocation/>

      <InflationImpact/>

    </div>

  );
}

export default MutualFunds;