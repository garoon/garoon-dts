// garoon.base.user.getLoginUser
const user = garoon.base.user.getLoginUser();
const s: string = user.id;

const scheduleEvent = garoon.schedule.event.get();
const id: string = scheduleEvent.id;
