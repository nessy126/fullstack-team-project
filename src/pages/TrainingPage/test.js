</div>
                <div className={s.left__wrapper}>
                  <TrainingData
                    getAmountDaysTraining={getAmountDaysTraining}
                    getAmountBooksTraining={getAmountBooksTraining}
                  />
                  <Chart />
                </div>
              </section>
            ) : (
              <section className={s.page__wrapper}>
                <div className={s.left__wrapper}>
                  <Statistics />
                  <MyGoals data={arrayStatistic} />
                </div>
                <div className={s.right__wrapper}>
                  <StatisticsTabl />
                  <Chart />
                  <StatisticsResults />
                </div>
              </section>
            ))}
          {matches.large &&
            (!statusIsTraining ? (
              <section className={s.page__wrapper}>
                <div className={s.right__wrapper}>
                  <MyGoals data={arrayPlanTraining} />
                </div>
                <div className={s.left__wrapper}>
                  <TrainingData
                    getAmountDaysTraining={getAmountDaysTraining}
                    getAmountBooksTraining={getAmountBooksTraining}
                  />
                  <Chart auth={auth} />
                </div>
              </section>
            ) : (
              <section className={s.page__wrapper}>
                <div className={s.left__wrapper}>
                  <MyGoals data={arrayStatistic} />
                  <StatisticsResults />
                </div>
                <div className={s.right__wrapper}>
                  <Statistics />
                  <StatisticsTabl />
                  {/*  */}
                  {training.isLoading ? (
                    <p>Loading</p>
                  ) : (
                    <Chart auth={auth} userData={training.training[0]} />
                  )}
                </div>
              </section>
            ))}