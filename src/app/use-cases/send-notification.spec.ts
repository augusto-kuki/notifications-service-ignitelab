import { InMemoryNotificationsRepository } from '../../../src/test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notifications', () => {
  it('should be able to send notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      category: 'social',
      content: 'Nova notificacao',
      recipientId: 'recipient-id',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
  });
});
