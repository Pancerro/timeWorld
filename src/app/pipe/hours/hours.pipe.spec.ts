import { HoursPipe } from './hours.pipe';
import { WorldTime } from 'src/app/class/world-time';

describe('HoursPipe', () => {

  it('create an instance', () => {
    const pipe = new HoursPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform a text', () => {
    const pipe = new HoursPipe();
    let time: WorldTime = new WorldTime("CEST", "2020-01-01T00:00:00.037527+02:00")
    expect(pipe.transform(time)).toEqual("00:00:00");
  });
});
