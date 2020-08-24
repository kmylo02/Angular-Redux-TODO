import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pedientes';

export const setFiltro = createAction(
    '[Filtro] Set Filter',
    props<{ filtro: filtrosValidos }>()
);