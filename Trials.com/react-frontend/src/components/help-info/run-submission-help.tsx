import ExampleTrack from "../../images/ExampleTrackHelp.png";
import Leaderboard from "../../images/Leaderboard.png";
import RunInfo from "../../images/Run-Info.jpg";

export const NinjaLevelHelp = () => {
    return (
        <div className="help-panel-container">
            <div className="help-panel">
                <h1 className="help-header">The Ninja Level of a track</h1>

                <h4 className="help-info-header">
                    How do we use ninja levels?
                </h4>
                <p className="help-info-paragraph">
                    This is a subjective measure that we use to calculate the
                    ninja points a run is given. When a run is submitted, this
                    measure is converted to a weight. It is then combined with
                    all other runs on the exact same track, submitted by other
                    riders. From here, the weights from all runs are summed and
                    averaged into what could be considered a consensus weight.
                    This final value is used in calculations of ninja points.
                </p>
                <h4 className="help-info-header">
                    How do we define ninja levels?
                </h4>
                <p className="help-info-paragraph">
                    Ninja Level can be thought of in terms of how "difficult"
                    obstacles within a track feel to you overall. Ninja Levels
                    are steps above 'extreme' rated tracks. To provide a frame
                    of reference, the lowest ninja level (least difficult) track
                    would contain enough obstacles obstacles to complete that it
                    would feel like it is a step above Inferno IV. The highest
                    ninja level (most difficult) track would contain so many
                    difficult obstacles that it would be impossible for any
                    current player to complete. These are the two extremes. Most
                    tracks fall in between these extremes.
                </p>
                <h4 className="help-info-header">
                    How should you determine the ninja level of a track?
                </h4>
                <p className="help-info-paragraph">
                    Since all track fall between these two "difficulty"
                    extremes, you must use experience of completing other tracks
                    as context for choosing the ninja level of a track. All
                    tracks' ninja levels are relative to each other. When
                    choosing the ninja of a track, you have a range of options:
                    0.5-9.5. The higher the number, the more difficult the track
                    is. The reason the range of numbers is 0.5 to 9.5 is because
                    the community currently rates tracks roughly on this scale
                </p>
            </div>
        </div>
    );
};

export const LengthHelp = () => {
    return (
        <div className="help-panel-container">
            <div className="help-panel">
                <h1 className="help-header">The Length of a track</h1>

                <h4 className="help-info-header">How do we use length?</h4>
                <p className="help-info-paragraph">
                    This is a subjective measure that we use to calculate the
                    ninja points a run is given. When a run is submitted, this
                    measure is converted to a weight. It is then combined with
                    all other runs on the exact same track, submitted by other
                    riders. From here, the weights from all runs are summed and
                    averaged into what could be considered a consensus weight.
                    This final value is used in calculations of ninja points.
                </p>
                <h4 className="help-info-header">How do we define length?</h4>
                <p className="help-info-paragraph">
                    Length is best thought of as how long a track would take to
                    finish given perfect inputs.
                </p>
                <h4 className="help-info-header">
                    How should you determine the length of a track?
                </h4>
                <p className="help-info-paragraph">
                    All tracks' lengths are relative to each other For example,
                    if a track has a driving line that takes 20 minutes to drive
                    on flat ground to complete, it should be considered a long
                    track. If a different track has a single start and finish
                    set right next to each other, this would be considered a
                    short track. You have 3 options: 'Short', 'Medium', 'Long'.
                    If you pick the option 'Medium', you are saying the track is
                    of "medium length".
                </p>
            </div>
        </div>
    );
};

export const ConsistencyHelp = () => {
    return (
        <div className="help-panel-container">
            <div className="help-panel">
                <h1 className="help-header">The Consistency of a track</h1>

                <h4 className="help-info-header">How do we use consistency?</h4>
                <p className="help-info-paragraph">
                    This is a subjective measure that we use to calculate the
                    ninja points a run is given. When a run is submitted, this
                    measure is converted to a weight. It is then combined with
                    all other runs on the exact same track, submitted by other
                    riders. From here, the weights from all runs are summed and
                    averaged into what could be considered a consensus weight.
                    This final value is used in calculations of ninja points.
                </p>
                <h4 className="help-info-header">
                    How do we define consistency?
                </h4>
                <p className="help-info-paragraph">
                    Consistency can be thought of in terms of how "lucky"
                    obstacles a track contains feel to you. To provide a frame
                    of reference, the most consistent (least luck-based) track
                    would contain 0 obstacles to complete. The lease consistent
                    (most luck-based) track would be impossible to complete.
                    Another way to think of what we should consider as extremely
                    inconsistent is, a track where the rider is constantly being
                    hit by objects flying through the air, either killing the
                    rider or sending them flying. These are the two extremes.
                    Most tracks fall in between these extremes.
                </p>
                <h4 className="help-info-header">
                    How should you determine the consistency of a track?
                </h4>
                <p className="help-info-paragraph">
                    Since all track fall between these two "luck" extremes, you
                    must use experience of completing other tracks as context
                    for choosing the consistency level of a track. All tracks'
                    consistency levels are relative to each other. When choosing
                    the consistency of a track, you have 5 options: 'Not At
                    All', 'Not Very', 'Moderately', 'Very', 'Extremely'. If you
                    pick the option 'Not Very', you are saying it is "not very
                    consistent of a track".
                </p>
            </div>
        </div>
    );
};

export const ScanLBHelp = () => {
    return (
        <div className="help-panel-container">
            <div className="help-panel">
                <h1 className="help-header">Scanning your runs</h1>

                <h4 className="help-info-header">How do we scan runs?</h4>
                <p className="help-info-paragraph">
                    To scan your runs from Trials Fusion, we use a technology
                    known as Optical Character Recognition (OCR). This
                    technology scans images for light and dark patterns that
                    make up letters/numbers. For our purposes, we take an image
                    from you of an in-game screen with run information displayed
                    in it. We then scan it using OCR. We receive a large list of
                    words/letters/digits to parse from the image, and then
                    return a list of runs for you to choose yours from.
                </p>
                <h4 className="help-info-header">
                    Images we expect/allow to scan
                </h4>
                <p className="help-info-paragraph">
                    If you scan an image of a leaderboard, there is a better
                    chance that your run info will be correct, but will not
                    include the creators name. If you scan an image from the
                    "select track" screen. The results might be less accurate,
                    but should include the creators name.
                </p>
                <img
                    src={Leaderboard}
                    alt="Leaderboard"
                    width={600}
                    height={338}
                />
                <img
                    src={RunInfo}
                    alt="Run-Info-Screen"
                    width={600}
                    height={338}
                />
            </div>
        </div>
    );
};
