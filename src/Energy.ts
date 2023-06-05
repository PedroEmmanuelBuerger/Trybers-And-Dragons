import EnergyType from './type/EnergyType';

export default interface Energy {
  type_ : EnergyType;
  amount: number,
}

export { EnergyType };