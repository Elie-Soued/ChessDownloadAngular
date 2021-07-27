export interface archives {
  chess_blitz: {
    best: {
      rating: number;
      date: number;
      game: string;
    };
    last: {
      rating: number;
      date: number;
      rd: number;
    };
    record: {
      win: number;
      loss: number;
      draw: number;
    };
  };
  chess_bullet: {
    best: {
      rating: number;
      date: number;
      game: string;
    };
    last: {
      rating: number;
      date: number;
      rd: number;
    };
    record: {
      win: number;
      loss: number;
      draw: number;
    };
  };
  chess_daily: {
    best: {
      rating: number;
      date: number;
      game: string;
    };
    last: {
      rating: number;
      date: number;
      rd: number;
    };
    record: {
      win: number;
      loss: number;
      draw: number;
      time_per_move: number;
      timeout_percent: number;
    };
  };
  chess_rapid: {
    best: {
      rating: number;
      date: number;
      game: string;
    };
    last: {
      rating: number;
      date: number;
      rd: number;
    };
    record: {
      win: number;
      loss: number;
      draw: number;
    };
  };
  lessons: {
    highest: {
      rating: number;
      date: number;
    };
    lowest: {
      rating: number;
      date: number;
    };
  };
  puzzle_rush: {
    best: {
      score: number;
      total_attempts: number;
    };
  };
  tactics: {
    highest: {
      rating: number;
      date: number;
    };
    lowest: {
      rating: number;
      date: number;
    };
  };
}
