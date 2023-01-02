import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

type Overrride = Partial<NotificationProps>;

export function makeNotification(overrride: Overrride = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova soliciatacao de amizade!'),
    recipientId: 'example-recipient-id',
    ...overrride,
  });
}
