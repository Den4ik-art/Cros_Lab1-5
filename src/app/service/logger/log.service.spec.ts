import { LogService } from './log.service';

describe('LogService', () => {
    let service: LogService;

    beforeEach(() => {
        service = new LogService();
        spyOn(console, 'log');
    });

    it('should log a message', () => {
        const message = 'Test log message';
        service.write(message);
        expect(console.log).toHaveBeenCalledWith(message);
    });
});
