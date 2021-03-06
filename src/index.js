// local imports
import createResponsiveStateReducer from './util/createResponsiveStateReducer'
import createResponsiveStoreEnhancer from './util/createResponsiveStoreEnhancer'
import {CALCULATE_RESPONSIVE_STATE} from './actions/types'

export default {
    createResponsiveStateReducer,
    createResponsiveStoreEnhancer,
    CALCULATE_RESPONSIVE_STATE,
    // provide default responsive state reducer
    responsiveStateReducer: createResponsiveStateReducer(),
    // provide default responsive store enhancer
    responsiveStoreEnhancer: createResponsiveStoreEnhancer(),
}
