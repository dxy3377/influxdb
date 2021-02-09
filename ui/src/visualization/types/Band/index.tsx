import icon from './icon'
import properties from './properties'
import options from './options'
import view from './view'

export default register => {
  register({
    type: 'band',
    name: 'Band',
    graphic: icon,
    featureFlag: 'bandPlotType',
    initial: properties,
    component: view,
    options,
  })
}
