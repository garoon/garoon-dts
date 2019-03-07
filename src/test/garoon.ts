// garoon.base.user.getLoginUser
const user = garoon.base.user.getLoginUser();
const s: string = user.id;

const scheduleEvent = garoon.schedule.event.get();
const id: string = scheduleEvent.id;

const message_body: garoon.message.body.Recipients = {
    recipients: [
        { id: '1', name: 'cybozu', type: 'USER' },
        { code: 'sato', name: 'sato', type: 'USER' },
    ],
};

const recipient: garoon.message.body.Recipient = {
    id: '1',
    name: 'cybozu',
    type: 'USER',
};
garoon.message.body.set(message_body);

const el = garoon.message.body.getItemLastSpaceElement(
    'recipients'
);
