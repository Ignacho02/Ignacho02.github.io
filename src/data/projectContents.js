// src/data/projectContents.js

export const project1Content = {
  introduction: `
    <p style="margin-bottom: 1.5em;">Accurately monitoring external training load is essential to optimize performance and reduce injury risk in elite football. Tracking the variables that constitute external load allows coaching staff to adjust session planning, avoid excessive load spikes and promote better player recovery (Gabbett, 2016; Martins et al., 2023).</p>
    <p>This project aims to develop an interactive Streamlit application that predicts and analyzes the actual external load players will experience during an upcoming training session, based on task-level characteristics such as exercise type, number of players, field dimensions, and duration. This tool supports more efficient, proactive, and individualized load management.</p>
  `,

  data: `
    <p>For the project, a synthetic dataset is generated to closely mimic real-world training environments (Download <a href="/data/training_load_dataset.csv" download style="color: #3b82f6; font-weight: bold; text-decoration: underline;">here</a>). The dataset includes GPS data from 6 teams within the same club across 12 weeks. Each session is broken down into individual tasks, with detailed information (e.g., drill type, area, player count) and corresponding external load metrics derived from GPS tracking (e.g., total distance, high-speed running, accelerations). The synthetic nature of the data ensures privacy and scalability while preserving realistic correlations and distributions observed in professional football settings.</p>
  `,

  modeling: `
    <p style="margin-bottom: 2em;">To predict external load variables from task characteristics, two widely used machine learning algorithms for tabular regression are evaluated: Random Forest (RF) and Extreme Gradient Boosting (XGBoost). This choice balances predictive performance, robustness to noise and interpretability, critical for practical adoption in sports science contexts.</p>

    <h4 style="margin-bottom: 1em;">Random Forest (RF)</h4>
    <p style="margin-bottom: 1em;">Random Forest (Breiman, 2001) is an ensemble method that combines multiple decision trees trained on random subsets of data and features. Key advantages for this application include:</p>
    <ul style="list-style-type: disc; padding-left: 1.5em; margin: 1em 0;">
        <li>Robustness to noisy or correlated features (common in sports performance data).</li>
        <li>Strong out-of-the-box performance with minimal hyperparameter tuning.</li>
        <li>Native support for feature importance, enabling coaches to understand which task parameters most influence load outcomes.</li>
    </ul>
    <p style="margin-bottom: 2em;">Previous studies have demonstrated RF’s effectiveness in predicting physiological and external load metrics in football and other team sports (Rein & Memmert, 2016; Rossi et al., 2018).</p>

    <h4 style="margin-bottom: 1em;">Extreme Gradient Boosting (XGBoost)</h4>
    <p style="margin-bottom: 1em;">XGBoost (Chen & Guestrin, 2016) implements gradient boosting, where trees are trained sequentially to correct errors from prior iterations. It is included to:</p>
    <ul style="list-style-type: disc; padding-left: 1.5em; margin: 1em 0;">
      <li>Assess whether a more complex model could further improve prediction accuracy.</li>
      <li>Evaluate the trade-off between performance gains and computational cost.</li>
      <li>Test model behavior in a realistic, but controlled, synthetic environment before potential deployment on real data.</li>
    </ul>
    <p style="margin-bottom: 1em;">Recent literature highlights XGBoost’s strong performance in sports injury and load prediction tasks due to its ability to capture non-linear interactions (Leckey et al., 2025).</p>

    <p style="margin-bottom: 1em;">Both algorithms are tested in two configurations:</p>
    <ul style="list-style-type: disc; padding-left: 1.5em; margin: 1em 0;">
      <li>Baseline: default hyperparameters.</li>
      <li>Tuned Fast: light hyperparameter optimization using RandomizedSearchCV with a limited budget to balance efficiency and performance.</li>
    </ul>
  `,

  evaluation: `
    <p style="margin-bottom: 1em;">Models are evaluated across multiple external load variables, including total distance, high-intensity accelerations/decelerations, distance covered in speed zones, and peak acceleration values. For this purpose, performance is assessed using standard regression metrics:</p>
    <ul style="list-style-type: disc; padding-left: 1.5em; margin: 1em 0;">
      <li><strong>MAE</strong> (Mean Absolute Error): average magnitude of errors.</li>
      <li><strong>RMSE</strong> (Root Mean Squared Error): penalizes larger errors more heavily.</li>
      <li><strong>R²</strong> (Coefficient of Determination): proportion of variance explained.</li>
      <li><strong>MAPE</strong> (Mean Absolute Percentage Error): relative error (excluding zero-ground-truth cases).</li>
    </ul>
    <p style="margin-bottom: 1em;">RMSE is the primary criterion for model selection because it strongly penalizes large prediction errors—critical when underestimating or overestimating load could lead to poor training decisions—and because it retains the original units of the target variables (e.g., meters, counts), making errors directly interpretable by practitioners.</p>
  `,

  results: `
  <p>Both models deliver strong predictive performance, with the <strong>Random Forest (Tuned Fast)</strong> configuration standing out as the preferred choice. Specifically, it achieves an R² above 80% for two-thirds of all targets and surpasses 90% for more than half—demonstrating both breadth and depth in its accuracy. Coupled with its training efficiency and consistent stability across diverse physical load metrics, this balance makes it the natural candidate for deployment.</p>

  <div style="margin: 2rem 0;">
    <img src="/images/RMSE.png" alt="Model performance relative to best (RMSE-based)" style="width: 100%; max-width: 700px;" />
    <p style="font-size: 0.8125rem; color: #4b5563; margin-top: 0.375rem; text-align: center;"> <strong>Model Performance Relative to Best (RMSE-Based)</strong>. Performance is normalized per target (100% = best model for that variable. Higher = Better). The values shown represent the average across all variables within each physical load category.</p>
    <p style="margin-top: 1.5em;">Random Forest (Tuned Fast) consistently matches or exceeds the best performance across all physical load metrics, while other models show larger gaps—validating its robustness despite diverse target scales.</p>
  </div>

  <div style="margin: 2rem 0;">
    <img src="/images/wins.png" alt="Model wins by evaluation metric" style="width: 100%; max-width: 700px;" />
    <p style="font-size: 0.8125rem; color: #4b5563; margin-top: 0.375rem; text-align: center;"> <strong>Model Victories per Evaluation Metric</strong>.</p>
    <p style="margin-top: 1.5em;">Random Forest (Tuned and Baseline) dominates across all four key metrics (RMSE, MAE, R² and MAPE) demonstrating consistent superiority that isn’t dependent on a single evaluation criterion. This multi-metric dominance confirms its reliability for real-world deployment.</p>
  </div>

  <div style="margin: 2rem 0;">
    <img src="/images/prediction.png" alt="Prediction vs True for RF Tuned Fast" style="width: 100%; max-width: 700px;" />
    <p style="font-size: 0.8125rem; color: #4b5563; margin-top: 0.375rem; text-align: center;"><strong>Random Forest (Tuned Fast): Prediction vs True </strong> (Best Representative per Physical Category).</p>
    <p style="margin-top: 1.5em;">Visual validation on representative load categories (distance, acceleration, deceleration, speed) shows predictions tightly aligned with true values. Low RMSE and MAPE confirm the model captures real-world patterns accurately—essential for trustworthy session planning. <em>Notably, speed zones and peak values show slightly lower precision, likely due to their more sporadic and less predictable nature during training sessions.</em></p>
  </div>

  <div style="background-color: #ecfdf5; border-left: 4px solid #10b981; padding: 1rem 1.25rem; margin: 2rem 0; border-radius: 0.375rem;">
    <strong>✅ Key takeaway:</strong> Random Forest (Tuned Fast) achieves <strong>R² > 0.80 in 2/3 of targets</strong>, dominates in all evaluation metrics, and delivers interpretable, stable predictions—making it the optimal choice for practical use in elite football environments.
  </div>

  <p>The final model and its full preprocessing pipeline are serialized using Joblib and integrated into the Streamlit application (Download notebook with the code and selected model <a href="/data/Final_model_deployment.ipynb" download style="color: #3b82f6; font-weight: bold; text-decoration: underline;">here</a>).</p>
  `,

  streamlit_app: `
    <p>The Streamlit application, containing the trained RF model, empowers coaching and performance staff to anticipate actual external load before a session begins. By inputting task parameters, users receive real-time predictions per player and per drill, categorized by team, enabling proactive adjustments to session design. The interface includes three main tabs:</p>
    <ul style="list-style-type: disc; padding-left: 1.5em; margin: 1em 0;">
      <li><strong>Session Prediction</strong>: Forecasts load per player and task, benchmarked against recent match averages (match data only for players with ≥60 min played).</li>
      <li><strong>Player vs Team Comparison</strong>: Compares individual trends with team averages over the last 10 sessions to identify outliers and adjust predicted loads based on each player’s performance trend.</li>
      <li><strong>Weekly Microcycle Overview</strong>: contextualizes each session within the full weekly structure (6 training sessions + match).</li>
    </ul>
    <video controls autoplay loop playsinline width="100%" style="border-radius: 0.5rem; margin: 2rem 0; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
      <source src="/videos/training-load-app-demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p>
    The full source code, documentation, and Jupyter notebooks are available on 
    <a href="https://github.com/Ignacho02/Training-Load-Prediction-App" 
        target="_blank" 
        rel="noopener noreferrer" 
        style="color: #3b82f6; font-weight: 600; text-decoration: underline; font-size: 1.05rem;">
        GitHub
    </a>.
    </p>

    <div style="text-align: center; margin: 2rem 0;">
      <a href="https://training-load-prediction-app-bmpbtxifbptlxfuihytuy6.streamlit.app/" target="_blank" rel="noopener noreferrer" class="btn" style="background: linear-gradient(to right, #06b6d4, #3b82f6); color: white; padding: 0.85rem 2rem; border-radius: 9999px; font-weight: 600; text-decoration: none; display: inline-block; font-size: 1.05rem;">
        🚀 Try the App
      </a>
    </div>
  `,

  references: [
    "Akenhead, R., & Nassis, G. P. (2016). Training load and player monitoring in high-level football: Current practice and perceptions. International Journal of Sports Physiology and Performance, 11(5), 587–593. https://doi.org/10.1123/ijspp.2015-0331",
    "Gabbett, T. J. (2016). The training—injury prevention paradox: Should athletes be training smarter and harder? British Journal of Sports Medicine, 50(5), 273–280. https://doi.org/10.1136/bjsports-2015-095788",
    "Martins, F., Marques, A., França, C., Sarmento, H., Henriques, R., Ihle, A., & Gouveia, É. R. (2023). Weekly external load performance effects on sports injuries of male professional football players. International Journal of Environmental Research and Public Health, 20(2), 1121. https://doi.org/10.3390/ijerph20021121",
    "Breiman, L. (2001). Random Forests. Machine Learning, 45(1), 5–32.",
    "Chen, T., & Guestrin, C. (2016). XGBoost: A Scalable Tree Boosting System. Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD '16). https://doi.org/10.1145/2939672.2939785",
    "Rein, R., & Memmert, D. (2016). Big data and tactical analysis in elite soccer: future challenges and opportunities for sports science. SpringerPlus, 5(1), 1410. https://doi.org/10.1186/s40064-016-3108-2",
    "Rossi, A., Pappalardo, L., Cintia, P., Iaia, F. M., Fernández, J., & Medina, D. (2018). Effective injury forecasting in soccer with GPS training data and machine learning. PLoS ONE, 13(7), e0201264. https://doi.org/10.1371/journal.pone.0201264",
    "Leckey, C., van Dyk, N., Doherty, C., Lawlor, A., & Delahunt, E. (2025). Machine learning approaches to injury risk prediction in sport: a scoping review with evidence synthesis. British Journal of Sports Medicine, 59(7), 491–500. https://doi.org/10.1136/bjsports-2024-108576"
  ],

  technologies: ["Python", "scikit-learn", "XGBoost", "Streamlit", "Pandas", "Joblib", "Numpy", "Matplotlib", "Seaborn"]
};

export const project2Content = {
  introduction: `
    <p style="margin-bottom: 1.5em;">In most football clubs, <strong>Excel spreadsheets</strong> exported from tracking systems like Catapult, STATSports, or Wimu are the default way to manage GPS, wellness, and fitness data. While functional, this manual approach becomes <strong>inefficient and error-prone</strong> as data volume grows—duplicated records, broken formulas, and inconsistent updates compromise long-term analysis.</p>

    <p>This project replicates the <strong>data infrastructure of a professional football performance department</strong>, demonstrating how modern data engineering can transform that fragmented workflow into a <strong>scalable, automated system</strong>. Using <strong>Python, SQLite, and PowerBI</strong>, it builds a complete pipeline that converts raw CSV exports into a <strong>structured SQL database</strong> connected to <strong>automated dashboards</strong>, <strong>supporting evidence-based decision making</strong> in a more efficient way.</p>
  `,

  data: `
      <p style="margin-bottom: 1.5em;">The synthetic dataset applied in the project simulates a realistic monitoring ecosystem used in elite football environments. Metric selection followed the <strong>quadrant model</strong> (Buchheit & Laursen, 2024), which ensures systematic coverage of key physiological domains by including at least one monitoring variable per quadrant.</p>

      <p>At the heart of this framework is <strong>heart rate–based load tracking via THRZ</strong> (Time in High-intensity Heart Rate Zones). As Buchheit et al. (2025) explained:</p>

      <blockquote style="margin: 1rem 0; padding: 0.75rem 1rem; background-color: #f8fafc; border-left: 3px solid #3b82f6; font-style: italic; color: #334155;">
        Accumulating ~30 minutes per week above 90% HR<sub>max</sub> provides a realistic minimal stimulus for maintaining or improving aerobic fitness. Each additional 10 minutes in this zone may yield an extra 1–2% improvement in key fitness markers.
      </blockquote>

      <p>THRZ was prioritized over aggregated metrics like TRIMPs due to its practical advantages:</p>
      <ul style="list-style-type: disc; padding-left: 1.5em; margin: 1em 0;">
        <li><strong>Simplicity</strong>: Easy to compute and interpret without complex individualization.</li>
        <li><strong>Actionability</strong>: Directly applicable to daily and weekly load planning.</li>
        <li><strong>Granularity</strong>: Better aligned with micro-cycle objectives (e.g., session- and week-level targets).</li>
      </ul>

      <div style="margin: 2rem 0; padding: 0 0.5rem;">
        <img src="/images/cuadrante.jpg" alt="Quadrant model for load and response monitoring" style="width: 100%; max-width: 700px; display: block; margin: 0 auto; border-radius: 0.5rem; border: 1px solid #cbd5e1;" />
        <p style="font-size: 0.875rem; color: #4b5563; margin-top: 0.5rem; text-align: left;">
          <strong>Quadrant model</strong> – Framework for selecting monitoring variables (Buchheit & Laursen, 2024)
        </p>
      </div>

      <p style="margin-bottom: 1.5rem; line-height: 1.75; color: #1e293b; font-size: 1.05rem; text-align: justify;">
        With this approach, the specific variables selected for each quadrant are outlined in the table below.
      </p>

      <table style="width: 100%; margin: 1.5rem 0; border-collapse: collapse; font-size: 0.95rem;">
        <thead>
          <tr style="background-color: #f1f5f9;">
            <th style="padding: 0.6rem; text-align: left; border: 1px solid #e2e8f0;">Quadrant</th>
            <th style="padding: 0.6rem; text-align: left; border: 1px solid #e2e8f0;">Domain</th>
            <th style="padding: 0.6rem; text-align: left; border: 1px solid #e2e8f0;">Selected variables</th>
            <th style="padding: 0.6rem; text-align: left; border: 1px solid #e2e8f0;">Explanation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Metabolic Load</td>
            <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Internal</td>
            <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">HR Zones (THRZ), RPE</td>
            <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Practical and cost-effective. HR and RPE are widely validated proxies for internal load, once we accept their limitations, and are easy to implement at scale. </td>
          </tr>
          <tr>
            <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Neuromuscular Load</td>
            <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Internal and external</td>
            <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">RPE and GPS metrics (distance, high-speed distance, accelerations)</td>
            <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">GPS is a common, pragmatic proxy for external/neuromuscular load. Direct measures (force plates, linear encoders) are more informative for strength-specific neuromuscular strain but are excluded from the pipeline to keep the project reproducible. </td>
          </tr>
          <tr>
            <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Metabolic Adaptation</td>
            <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Response and adaptation</td>
            <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Submaximal exercise HR and lactate response (e.g., 1500 m submax test with lactate sampling)</td>
            <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Reflects aerobic efficiency and metabolic adaptation. These biomarkers enable aerobic adaptation tracking via submaximal testing, ideal for elite football where frequent maximal efforts are impractical.</td>
          </tr>
          <tr>
            <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Neuromuscular Adaptation</td>
            <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Response and adaptation</td>
            <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">CMJ, isometric strength and movement velocity (e.g., squat 1RM and velocity at 60% 1RM)</td>
            <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">These tests capture neuromuscular capacity and adaptation. Together with the aerobic test, the jump and basic strength tests complete the testing battery for this project.</td>
          </tr>
        </tbody>
      </table>

      <p>Download the full synthetic data generator notebook <a href="/data/Data_generation.ipynb" download style="color: #3b82f6; font-weight: bold; text-decoration: underline;">here</a>.</p>
  `,

  database: `
    <p>The core of the system is a <strong>relational SQLite database</strong> that unifies raw CSV exports (GPS, wellness, and fitness data) into a clean, queryable structure. It serves as the central layer of the workflow, ensuring data <strong>integrity, traceability, and automation</strong> while supporting four key monitoring domains: players, session metrics, wellness, and fitness tests. SQLite was chosen for its simplicity and portability, though the schema is scalable to MySQL or other production-grade databases. The resulting relational structure consists of the following tables:</p>

    <table style="width: 100%; margin: 1.5rem 0; border-collapse: collapse; font-size: 0.95rem;">
      <thead>
        <tr style="background-color: #f1f5f9;">
          <th style="padding: 0.6rem; text-align: left; border: 1px solid #e2e8f0; width: 18%;">Table</th>
          <th style="padding: 0.6rem; text-align: left; border: 1px solid #e2e8f0; width: 28%;">Content</th>
          <th style="padding: 0.6rem; text-align: left; border: 1px solid #e2e8f0; width: 54%;">Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Players</td>
          <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Player profiles (age, position, anthropometrics)</td>
          <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Reference table linking all monitoring domains to individual athletes.</td>
        </tr>
        <tr>
          <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Session metrics</td>
          <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">GPS and HR data per session</td>
          <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Quantifies external and internal training load on a daily basis.</td>
        </tr>
        <tr>
          <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Wellness</td>
          <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Daily self-reported metrics</td>
          <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Monitors subjective recovery status and well-being trends.</td>
        </tr>
        <tr>
          <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Fitness tests</td>
          <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Periodic testing (jumps, HR, strength)</td>
          <td style="padding: 0.6rem; border: 1px solid #e2e8f0;">Tracks longitudinal adaptations to training stimuli.</td>
        </tr>
      </tbody>
    </table>

    <p>For implementation details, download the script that creates the initial database <a href="/data/create_db.py" download style="color: #3b82f6; font-weight: bold; text-decoration: underline;">here</a>.</p>
    `,

  dashboard: `
      <p>Once the database is created, it can be connected directly to <strong>Power BI Desktop</strong> via a live SQL connection. This means that every time new CSV files are processed and appended by the pipeline, Power BI can refresh automatically to reflect the latest data, eliminating manual reprocessing. The dashboards are built on SQL queries that join the four core tables, enabling flexible, longitudinal visualizations of:</p>
      <ul style="list-style-type: disc; padding-left: 1.5em; margin: 1em 0;">
        <li>Training load trends (distances, HR zones, RPE load)</li>
        <li>Wellness and recovery profiles</li>
        <li>Fitness test progression and player benchmarking</li>
      </ul>

      <p>The example dashboard built for this project demonstrates how coaches and sport scientists could monitor weekly load, identify high-intensity exposures, and compare players or squads across training days—all within a single, interactive interface.</p>

      <div style="margin: 2rem 0;">
        <img src="/images/Dashboard.jpg" alt="Full Power BI Dashboard" style="width: 100%; max-width: 900px; border-radius: 0.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.08);" />
        <p style="font-size: 0.875rem; color: #4b5563; margin-top: 0.5rem;">
          <strong>Complete Power BI dashboard (<a href="/files/Departamento_Optimizacion.pbix" download style="color: #4b82f6; font-weight: bold; text-decoration: underline;">Download here</a>)</strong> – Simulating a professional performance department.
        </p>
      </div>
      <h3 style="font-weight: 700; margin: 2rem 0 1rem;">Key Views and Metrics</h3>

      <p><strong>• Weekly Load Summary</strong> → Displays total activity minutes, average RPE, total distance (m), minutes >90% HR<sub>max</sub>, and >95% V<sub>max</sub> exposures, offering a quick overview of physical stress for the selected week or squad. Color-coded alerts flag insufficient exposure (red) versus adequate stimulus (green).</p>
      <div style="margin: 1.5rem 0;">
        <img src="/images/KPI.jpg" alt="Weekly Load Summary Dashboard" style="width: 100%; max-width: 600px; display: block; margin: 0 auto; border-radius: 0.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.08);" />
      </div>

      <p><strong>• Training Distance Distribution by Day</strong> → Line charts show total distance and high-speed distance per weekday, highlighting day-to-day load variation (e.g., MD, MD‑1, MD‑2).</p>
      <div style="margin: 1.5rem 0;">
        <img src="/images/distancia.jpg" alt="Training Distance Distribution" style="width: 50%; max-width: 600px; display: block; margin: 0 auto; border-radius: 0.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.08);" />
      </div>

      <p><strong>• Acceleration / Deceleration Profile</strong> → Bar charts visualize the count of accelerations and decelerations, providing insight into mechanical load and session intensity.</p>
      <div style="margin: 1.5rem 0;">
        <img src="/images/acc.jpg" alt="Acceleration Profile" style="width: 50%; max-width: 600px; display: block; margin: 0 auto; border-radius: 0.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.08);" />
      </div>

      <p><strong>• Internal Load Trends</strong> → Combines RPE and time above 90% HR<sub>max</sub> per day, illustrating the relationship between perceived effort and physiological demand.</p>
      <div style="margin: 1.5rem 0;">
        <img src="/images/RPE.jpg" alt="Internal Load Trends" style="width: 50%; max-width: 600px; display: block; margin: 0 auto; border-radius: 0.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.08);" />
      </div>

      <p><strong>• Speed Exposure Analysis</strong> → Shows each player’s % of maximum speed reached during the week, a key readiness and performance indicator. Alerts trigger when values fall below 95% of individual max.</p>
      <div style="margin: 1.5rem 0;">
        <img src="/images/speed.jpg" alt="Speed Exposure Analysis" style="width: 100%; max-width: 600px; display: block; margin: 0 auto; border-radius: 0.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.08);" />
      </div>

      <p><strong>• Filter Controls</strong> → Dynamic slicers for Week, Day, Team (First Team, U19, U21, U23), and Player, enabling targeted analysis across groups and individuals.</p>
      <div style="margin: 1.5rem 0;">
        <img src="/images/filters.jpg" alt="Dashboard Filters" style="width: 100%; max-width: 600px; display: block; margin: 0 auto; border-radius: 0.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.08);" />
      </div>

      <div style="background-color: #ecfdf5; border-left: 4px solid #10b981; padding: 1rem 1.25rem; margin: 2rem 0; border-radius: 0.375rem;">
        <strong>✅ Key takeaway:</strong> This pipeline transforms error-prone Excel workflows into a robust, automated system—enabling live dashboards, longitudinal tracking, and scalable monitoring aligned with elite football standards.
      </div>
    `,

  update_workflow: `
    <p>Updating the system is fully automated:</p>
    <ol style="list-style-type: decimal; padding-left: 1.8rem; margin: 1.5rem 0; font-size: 1.05rem; line-height: 1.75; color: #1e293b;">
      <li>Drop new daily CSVs into the project folder.</li>
      <li>Run <code>update_db.py</code> (<a href="/data/update_db.py" download style="color: #3b82f6; font-weight: bold; text-decoration: underline;">download here</a>).</li>
      <li>Processed files automatically move to <code>/done</code> to prevent duplication.</li>
      <li>Power BI refreshes the latest data instantly.</li>
    </ol>

    <p>This short demo shows how the system updates seamlessly: running the Python script processes new data, and the dashboard refreshes instantly to reflect the latest insights. </p>

    <video controls playsinline width="100%" style="border-radius: 0.5rem; margin: 2rem 0; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
      <source src="/videos/Actualizacion.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <p>The full source code, documentation, and notebooks are available on 
    <a href="https://github.com/Ignacho02/Football-Performance-department-Data-infrastructure" 
        target="_blank" 
        rel="noopener noreferrer" 
        style="color: #3b82f6; font-weight: 600; text-decoration: underline; font-size: 1.05rem;">
        GitHub
    </a>.</p>
  `,

  references: [
    "Buchheit, M., & Laursen, P. B. (2024). Data everywhere, insight nowhere: a practical quadrant-based model for monitoring training load vs. response in elite football. Sport Performance & Science Reports, 2024(259), v1.",
    "Buchheit, M., Akubat, I., Ellis, M., Campos, M., Rabbani, A., Castagna, C., & Malone, S. (2025). Revisiting dose–response relationships between heart rate zones, TRIMPs, and aerobic-related physiological and performance markers in elite team sports. Sport Performance & Science Reports, 269, v1."
  ],

  technologies: ["Python", "SQLite", "Pandas", "Power BI"]
};