// --- League averages
export const leagueAverages = [
  { metric_name: "Goals per 90", average_value: 0.35 },
  { metric_name: "Shots on Target %", average_value: 45 },
  { metric_name: "Successful Dribbles %", average_value: 60 },
  { metric_name: "Key Passes per 90", average_value: 1.5 },
  { metric_name: "Tackles Won %", average_value: 55 },
  { metric_name: "Pass Accuracy %", average_value: 82 },
  { metric_name: "Interceptions per 90", average_value: 1.2 },
];
export const players = [
  // --- Centre Forward ---
  {
    player_pos: "Centre Forward",
    stats: {
      "Non-penalty goals per 90_percentile": 0.85,
      "Non-penalty goals per 90": 0.65,
      "xG per 90_percentile": 0.78,
      "xG per 90": 0.70,
      "Shots on target per 90_percentile": 0.72,
      "Shots on target per 90": 3.5,
      "Touches in box per 90_percentile": 0.68,
      "Touches in box per 90": 28,
      "xA per 90_percentile": 0.65,
      "xA per 90": 0.9,
      "Offensive duels won, %_percentile": 0.75,
      "Offensive duels won, %": 60,
    }
  },

  // --- Central Midfielder ---
  {
    player_pos: "Central Midfielder",
    stats: {
      "Successful defensive actions per 90_percentile": 0.75,
      "Successful defensive actions per 90": 12,
      "Defensive duels won, %_percentile": 0.70,
      "Defensive duels won, %": 60,
      "Accurate passes, %_percentile": 0.82,
      "Accurate passes, %": 85,
      "Accurate passes to final third per 90_percentile": 0.78,
      "Accurate passes to final third per 90": 22,
      "Key passes per 90_percentile": 0.80,
      "Key passes per 90": 2.2,
      "xA per 90_percentile": 0.68,
      "xA per 90": 1.0,
    }
  },

  // --- Defensive Midfielder ---
  {
    player_pos: "Defensive Midfielder",
    stats: {
      "Accurate passes to final third per 90_percentile": 0.75,
      "Accurate passes to final third per 90": 20,
      "Interceptions per 90_percentile": 0.88,
      "Interceptions per 90": 2.0,
      "Sliding tackles per 90_percentile": 0.70,
      "Sliding tackles per 90": 3.0,
      "Accurate passes to penalty area per 90_percentile": 0.65,
      "Accurate passes to penalty area per 90": 12,
      "Aerial duels won, %_percentile": 0.80,
      "Aerial duels won, %": 62,
      "Accurate progressive passes per 90_percentile": 0.68,
      "Accurate progressive passes per 90": 18,
    }
  },

  // --- Winger ---
  {
    player_pos: "Winger",
    stats: {
      "Non-penalty goals per 90_percentile": 0.78,
      "Non-penalty goals per 90": 0.5,
      "xG per 90_percentile": 0.72,
      "xG per 90": 0.48,
      "Shots on target per 90_percentile": 0.70,
      "Shots on target per 90": 2.8,
      "Successful dribbles per 90_percentile": 0.88,
      "Successful dribbles per 90": 14,
      "Assists per 90_percentile": 0.65,
      "Assists per 90": 0.9,
      "xA per 90_percentile": 0.70,
      "xA per 90": 1.1,
    }
  }
];
