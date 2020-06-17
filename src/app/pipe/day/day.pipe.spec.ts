import { DayPipe } from './day.pipe';
import { WorldTime } from 'src/app/class/world-time';

describe('DayPipe', () => {

  it('create an instance', () => {
    const pipe = new DayPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform a text', () => {
    const pipe = new DayPipe();
    let time: WorldTime = new WorldTime("CEST", "2020-01-01T00:00:00.037527+02:00")
    expect(pipe.transform(time)).toEqual("2020-01-01");
  });
});
