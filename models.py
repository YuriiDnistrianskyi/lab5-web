from database import db

class Stadium(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=False, nullable=False)
    audience = db.Column(db.Integer)
    lighting_power = db.Column(db.Integer)

    def __rerp__(self):
        return f"Stadium('{self.id}', '{self.name}', '{self.audience}', '{self.lighting_power}')"
