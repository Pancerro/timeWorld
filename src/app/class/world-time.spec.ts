import { WorldTime } from './world-time';

describe('WorldTime', () => {
  it('should create an instance', () => {
    expect(new WorldTime("CEST","2020-06-16T03:32:46.037527+02:00")).toBeTruthy();
  });

  it('should a check class worldTime', () => {
    expect(new WorldTime("CEST","2020-06-16T03:32:46.037527+02:00")).toEqual(new WorldTime("CEST","2020-06-16T03:32:46.037527+02:00"));
  });
});
