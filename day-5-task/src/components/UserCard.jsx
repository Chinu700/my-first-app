import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

function UserCard({ user }) {
  return (
    <Link to={`/user/${user.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="glass" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '50px', height: '50px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #c7d2fe, #a5b4fc)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.2rem', fontWeight: 'bold', color: '#3730a3'
          }}>
            {user.name.charAt(0)}
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-main)' }}>{user.name}</h3>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>@{user.username}</p>
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <Mail size={16} /> <span>{user.email}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <MapPin size={16} /> <span>{user.address.city}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default UserCard;
