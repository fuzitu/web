import {Component, Input} from '@angular/core';
import {Track} from '../../../tracks/models/track.model';
import {Tracks} from '../../../tracks/collections/tracks.collection';
import {PlayQueue} from '../../../player/collections/play-queue';
import {PlayQueueItem} from '../../../player/models/play-queue-item';

@Component({
  selector: 'app-play-button',
  styleUrls: ['./play_button.style.scss'],
  templateUrl: './play_button.template.html'
})
export class PlayButtonComponent {

  @Input() track: Track;

  @Input() tracks: Tracks<Track>;

  private playQueue: PlayQueue<PlayQueueItem> = PlayQueue.getInstance();

  isPlaying(): boolean {
    const playingItem = this.playQueue.getPlayingItem();
    return (playingItem && playingItem.track.id === this.track.id);
  }
}