import mitt, { Emitter } from 'mitt';

const eventBus: Emitter<any> = mitt();

export default eventBus;