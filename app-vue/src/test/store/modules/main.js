import {actions} from './main/actions';
import {getters} from './main/getters';
import {mutations} from './main/mutations';
import {state} from './main/state';

export const MAIN = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}