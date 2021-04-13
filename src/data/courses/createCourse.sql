INSERT INTO [advising].[COURSE_TBL]
(
    [course_title],
    [course_code],
    [credits],
    [course_description],
    [required]
)
VALUES
(
    @course_title,
    @course_code,
    @credits,
    @course_description,
    @required
);